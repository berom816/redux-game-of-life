export const NEXT_GENERATION = 'NEXT_GENERATION';

export function increaseGeneration(){
  return {
    type:NEXT_GENERATION,
    payload:null
  }
}
