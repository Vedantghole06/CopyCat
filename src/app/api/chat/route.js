// import { OpenAI } from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, 
//   baseURL: 'https://api.nova-oss.com/v1',
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { prompt } = req.body;

//       if (!prompt || prompt.trim() === '') {
//         return res.status(400).json({ error: 'Please send your prompt' });
//       }

//       const completion = await openai.chat.completions.create({
//         messages: [
//           {
//             role: "system",
//             content: "You are a social media assistant that helps to create captions or content or script for people.",
//           },
//           { role: 'user', content: prompt },
//         ],
//         model: 'gpt-3.5-turbo',
//       });

//       const completionResponse = completion.choices[0].message.content;
//       console.log("generation is successful");

//       return res.status(200).json({ completionResponse });
//     } catch (error) {
//       console.error("Error in OpenAI request:", error.message || error);
//       return res.status(500).json({ error: 'An error occurred' });
//     }
//   } else if (req.method === 'GET') {
//     try {
//       const prompt = req.query.prompt;

//       if (!prompt || prompt.trim() === '') {
//         return res.status(400).json({ error: 'Please provide a prompt in the query parameter "prompt"' });
//       }

//       return res.status(200).json({ prompt });
//     } catch (error) {
//       console.error("Error in OpenAI request:", error.message || error);
//       return res.status(500).json({ error: 'An error occurred' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST', 'GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }



// // import OpenAI from "openai";

// // // Initialize the OpenAI client
// // const openai = new OpenAI({
// //   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Replace with your OpenAI API key
// //   baseURL: 'https://api.nova-oss.com/v1', // Replace with the appropriate API base URL
// // });

// // // POST request handler
// // export async function POST(request) {
// //   try {
// //     // Parse the request body JSON
// //     const requestBody = await request.json();
// //     const prompt = requestBody.prompt;

// //     if (!prompt || prompt === '') {
// //       return new Response('Please send your prompt', { status: 400 });
// //     }

// //     // Create a chat completion using OpenAI
// //     const completion = await openai.chat.completions.create({
// //       messages: [
// //         {
// //           role: "system",
// //           content: "You are a social media assistant that helps to create captions or content or script for people.",
// //         },
// //         { role: 'user', content: prompt }]
// //         , // Use the provided prompt
// //       model: 'gpt-3.5-turbo', // Use the desired OpenAI model
// //     });

// //     // Extract the response from OpenAI's completion
// //     const completionResponse = completion.choices[0].message.content;
// //     // console.log(completion)

// //     console.log("generation is successful")

// //     // Return the response as JSON
// //     return new Response(JSON.stringify({ completionResponse }), {
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     return new Response('An error occurred', { status: 500 });
// //   }
// // }

// // // GET request handler
// // export async function GET(request) {
// //   try {
// //     // Retrieve the prompt from the query parameter named "prompt"
// //     const prompt = request.url.includes('?') ? new URL(request.url).searchParams.get('prompt') : null;

// //     if (!prompt || prompt === '') {
// //       return new Response('Please provide a prompt in the query parameter "prompt"', { status: 400 });
// //     }

// //     // Return the prompt as a JSON response
// //     return new Response(JSON.stringify({ prompt }), {
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     return new Response('An error occurred', { status: 500 });
// //   }
// // }
