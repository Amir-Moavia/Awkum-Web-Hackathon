'use server';

/**
 * @fileOverview Summarizes faculty profiles using AI to provide concise summaries of their research interests and expertise.
 *
 * - summarizeFacultyProfile - A function that summarizes the faculty profile.
 * - SummarizeFacultyProfileInput - The input type for the summarizeFacultyProfile function.
 * - SummarizeFacultyProfileOutput - The return type for the summarizeFacultyProfile function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFacultyProfileInputSchema = z.object({
  profileText: z
    .string()
    .describe('The complete text of the faculty member\'s profile.'),
});
export type SummarizeFacultyProfileInput = z.infer<
  typeof SummarizeFacultyProfileInputSchema
>;

const SummarizeFacultyProfileOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the faculty member\'s research interests and expertise.'
    ),
});
export type SummarizeFacultyProfileOutput = z.infer<
  typeof SummarizeFacultyProfileOutputSchema
>;

export async function summarizeFacultyProfile(
  input: SummarizeFacultyProfileInput
): Promise<SummarizeFacultyProfileOutput> {
  return summarizeFacultyProfileFlow(input);
}

const summarizeFacultyProfilePrompt = ai.definePrompt({
  name: 'summarizeFacultyProfilePrompt',
  input: {schema: SummarizeFacultyProfileInputSchema},
  output: {schema: SummarizeFacultyProfileOutputSchema},
  prompt: `You are an AI assistant that summarizes faculty profiles to help prospective students quickly understand their research interests and expertise.

  Please provide a concise summary of the following faculty profile, highlighting key areas of expertise and research interests:

  {{{profileText}}}
  `,
});

const summarizeFacultyProfileFlow = ai.defineFlow(
  {
    name: 'summarizeFacultyProfileFlow',
    inputSchema: SummarizeFacultyProfileInputSchema,
    outputSchema: SummarizeFacultyProfileOutputSchema,
  },
  async input => {
    const {output} = await summarizeFacultyProfilePrompt(input);
    return output!;
  }
);
