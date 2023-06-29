import type { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
    const {
      planetscale: { connection },
    } = context;
  
    const { client_number, molecule, property, lots, time } = JSON.parse(event.body as string);
  
    try {
      // Insert the run into the leaderboard table
      await connection.execute(
        "INSERT INTO leaderboard (client_number, molecule, property, lots, time) VALUES (?, ?, ?, ?, ?)",
        [client_number, molecule, property, lots, time]
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