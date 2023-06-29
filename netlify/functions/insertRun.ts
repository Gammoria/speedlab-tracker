import type { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
    const {
      planetscale: { connection },
    } = context;

    const { body } = event;

    if (!body) {
      return {
        statusCode: 400,
        body: "Missing body",
      };
    }
  
    const { user, client_number, molecule, property, lots, time } = JSON.parse(body);
  
    try {
      // Insert the run into the leaderboard table
      await connection.execute(
        "INSERT INTO leaderboard (user, client_number, molecule, property, lots, time) VALUES (?, ?, ?, ?, ?, ?)",
        [user, client_number, molecule, property, lots, time]
      );
  
      return {
        statusCode: 201,
        body: "Run successfully inserted into leaderboard.",
      };
    } catch (error) {
      console.error("Error inserting run into leaderboard:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Error inserting run into leaderboard." }),
      };
    }
  });