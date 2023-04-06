from flask import Blueprint, request, jsonify
from app.services.chatgpt_service import ChatGPTService
from config import OPENAI_MODEL, OPENAI_API_KEY

print(OPENAI_API_KEY, OPENAI_MODEL)
chatgpt_blueprint = Blueprint('chatgpt', __name__)
chatgpt_service = ChatGPTService(api_key=OPENAI_API_KEY, engine=OPENAI_MODEL)

@chatgpt_blueprint.route('/chatgpt/query', methods=['POST'])
def chatgpt_query():
    data = request.get_json()
    prompt = data.get('prompt', '')

    response_text = chatgpt_service.query(prompt)
    return jsonify({"response": response_text})