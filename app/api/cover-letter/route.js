import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request) {
  try {
    const data = await request.json();

    const prompt = generatePrompt(data);

    //console.log(data);

    //console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    //console.log(text);

    return NextResponse.json(text, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ detail: error }, { status: 500 });
  }
}

function generatePrompt(data) {
  //const { jobDetails, experienceDetails } = data;

  const jsonData = JSON.stringify(data);

  return `Please generate a cover letter for the following job opportunity:
Job Details:
Job Title: [Job Title from JSON]
Company Name: [Company Name from JSON]
Job Description: [Job Description from JSON]
Personal Details:
Name: [Name from JSON]
Mobile Number: [Mobile Number from JSON]
Email: [Email from JSON]
Experience:
[Experience 1]: [Designation from JSON] at [Organization from JSON]
Dates: [Start Date from JSON] - [End Date from JSON] (Current: [Is Current from JSON])
Key Responsibilities: [Description from JSON]
Skills: [List of skills with labels from JSON]
[Experience 2]: [Repeat for each experience in JSON]
Skills:
[List of skills with labels from JSON]
Achievements:
[Achievements from JSON]
Cover Letter Structure:
Introduction: Start with a strong opening paragraph that expresses your interest in the job and how your skills align with the position.
Experience: Highlight 2-3 relevant experiences from your resume, focusing on specific achievements and skills that match the job description.
Skills: Briefly mention key skills relevant to the role.
Company Alignment: Demonstrate your knowledge of the company and how your values align with theirs.
Closing: Express your enthusiasm for the opportunity and your desire to contribute to the company's success.
Call to Action: Briefly mention your availability for an interview.
JSON Data:
[${jsonData}]
Important Notes:
Tailor the Prompt: Adjust the prompt based on the specific job requirements and your own experience. For example, if the job emphasizes teamwork, highlight experiences where you collaborated effectively.
Specificity: Use specific examples and quantifiable results in your cover letter to showcase your achievements.

[${jsonData}]
    `;
}
