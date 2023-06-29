import type { Handler } from "@netlify/functions";
import { withPlanetscale } from "@netlify/planetscale";

export const handler: Handler = withPlanetscale(async (event, context) => {
  const {
    planetscale: { connection },
  } = context;

  try {
    // Execute the query to retrieve leaderboard data
    const { rows } = await connection.execute("SELECT * FROM leaderboard");
  
    // Extract the desired properties from the rows
    const leaderboardData = rows.map((row: any) => {
      return {
        initials: row.user,
        client: row.client_number,
        molecule: row.molecule,
        property: row.property,
        lots: row.lots,
        time: row.time,
        date: row.date,
        day: row.day,
      };
    });
  
    return {
      statusCode: 200,
      body: JSON.stringify(leaderboardData),
    };
  } catch (error) {
    console.error("Error retrieving leaderboard data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error retrieving leaderboard data." }),
    };
  }
});