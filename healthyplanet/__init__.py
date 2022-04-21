import os
from flask import Flask
if os.path.exists("env.py"):
    import env  # noqa


app = Flask(__name__)

from healthyplanet import routes
