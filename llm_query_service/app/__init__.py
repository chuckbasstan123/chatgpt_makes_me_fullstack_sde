# -*- coding: utf-8 -*-
from app.api.llm_query import chatgpt_blueprint
from flask import Flask


def create_app(config_object: dict = {}):
    app = Flask(__name__)
    app.config.from_object(config_object)

    @app.route("/health")
    def health_check():
        return "OK"

    register_blueprints(app)

    return app


def register_blueprints(app: Flask):
    app.register_blueprint(chatgpt_blueprint, url_prefix="")
