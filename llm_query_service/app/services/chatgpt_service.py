import openai

class ChatGPTService:
    def __init__(self, api_key: str, engine: str = "text-davinci-002"):
        openai.api_key = api_key
        self.engine = engine

    def query(self, prompt, max_tokens=150, n=1, temperature=0.7):
        response = openai.Completion.create(
            engine=self.engine,
            prompt=prompt,
            max_tokens=max_tokens,
            n=n,
            stop=None,
            temperature=temperature,
        )
        return response.choices[0].text.strip()
