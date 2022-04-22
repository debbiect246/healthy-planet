""" Routes """
from flask import render_template
from healthyplanet import app


@app.route("/")
def index():
    """ Basic route """
    return render_template("index.html")


@app.route("/plastic-facts")
def plastic_facts():
    """ Basic route """
    return render_template("plastic-facts.html")


@app.route("/quiz")
def quiz():
    """ Basic route """
    return render_template("quiz.html")


@app.route("/pledges")
def pledges():
    """ Basic route """
    return render_template("pledges.html")


@app.route("/plastic-stories")
def plastic_stories():
    """ Basic route """
    return render_template("plastic-stories.html")