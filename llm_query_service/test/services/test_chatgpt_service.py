import pytest
from app.services.chatgpt_service import ChatGPTService
from app.config import OPENAI_MODEL, OPENAI_API_KEY


def test_chatgpt_service():
    service = ChatGPTService(api_key=OPENAI_API_KEY, engine=OPENAI_MODEL)
    response = service.query("Who is the president of the United States in 2008?")
    assert "George W. Bush" in response