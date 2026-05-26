import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const transactions = [
  { name: "Tesco Express", category: "Groceries", date: "Today", amount: -23.40 },
  { name: "Dishoom", category: "Eating out", date: "Yesterday", amount: -47.00 },
  { name: "TfL", category: "Transport", date: "Yesterday", amount: -4.80 },
  { name: "Salary", category: "Income", date: "1 May", amount: 3200 },
  { name: "Netflix", category: "Subscriptions", date: "1 May", amount: -17.99 },
  { name: "Sainsbury's", category: "Groceries", date: "30 Apr", amount: -54.20 },
  { name: "Uber", category: "Transport", date: "29 Apr", amount: -12.50 },
  { name: "Pret a Manger", category: "Eating out", date: "29 Apr", amount: -8.75 },
  { name: "Spotify", category: "Subscriptions", date: "28 Apr", amount: -11.99 },
  { name: "Amazon", category: "Shopping", date: "27 Apr", amount: -34.99 },
];

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const prompt = `You are a helpful personal finance assistant for an app called Ledgr.
      
Here are the user's recent transactions:
${transactions.map(t => `- ${t.name} (${t.category}): £${Math.abs(t.amount)} on ${t.date}`).join("\n")}

The user asks: ${message}

Answer in 2-3 sentences. Be specific, use the actual numbers from their transactions. 
Be friendly and helpful. Always use £ for currency.`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't get a response.";

    return Response.json({ reply });

  } catch (error) {
    console.error("Groq error:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}