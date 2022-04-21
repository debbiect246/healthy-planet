""" Run.py """
import os
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    """ Basic route """
    return render_template("index.html")
