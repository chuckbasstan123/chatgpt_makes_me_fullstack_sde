# -*- coding: utf-8 -*-
from app.config import OPENAI_API_KEY, OPENAI_MODEL
from app.services.chatgpt_service import ChatGPTService


def test_chatgpt_service():
    service = ChatGPTService(api_key=OPENAI_API_KEY, engine=OPENAI_MODEL)
    query = "Who is the president of the United States in 2008?"
    response = service.query(query)
    assert "George W. Bush" in response
