'use server';

/**
 * @fileOverview Summarizes academic papers to provide key findings and contributions.
 *
 * - summarizeAcademicPaper - A function that summarizes academic papers.
 * - SummarizeAcademicPaperInput - The input type for the summarizeAcademicPaper function.
 * - SummarizeAcademicPaperOutput - The return type for the summarizeAcademicPaper function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeAcademicPaperInputSchema = z.object({
  paperText: z
    .string()
    .describe('The text content of the academic paper to summarize.'),
});
export type SummarizeAcademicPaperInput = z.infer<typeof SummarizeAcademicPaperInputSchema>;

const SummarizeAcademicPaperOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the academic paper.'),
});
export type SummarizeAcademicPaperOutput = z.infer<typeof SummarizeAcademicPaperOutputSchema>;

export async function summarizeAcademicPaper(input: SummarizeAcademicPaperInput): Promise<SummarizeAcademicPaperOutput> {
  return summarizeAcademicPaperFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeAcademicPaperPrompt',
  input: {schema: SummarizeAcademicPaperInputSchema},
  output: {schema: SummarizeAcademicPaperOutputSchema},
  prompt: `You are an expert academic. Please summarize the following academic paper. Focus on the key findings and contributions of the paper.\n\nPaper Text: {{{paperText}}}`,
});

const summarizeAcademicPaperFlow = ai.defineFlow(
  {
    name: 'summarizeAcademicPaperFlow',
    inputSchema: SummarizeAcademicPaperInputSchema,
    outputSchema: SummarizeAcademicPaperOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
