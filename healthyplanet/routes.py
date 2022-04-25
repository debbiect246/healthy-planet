""" Routes """

from flask import render_template, request, url_for, redirect

import os
from healthyplanet import app
if os.path.exists("env.py"):
    import env

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


@app.route("/pledges", methods=["GET", "POST"])
def pledges():
    """pledges logic"""
    pledgesresult = []
    if request.method == "POST":
        pledgesresult = request.form.getlist('pledges')

        return render_template(
            'your-pledges.html',
            pledgesresult=pledgesresult,
            PUBLIC_KEY=os.environ.get('PUBLIC_KEY'),
            EMAIL_TEMPLATE=os.environ.get('EMAIL_TEMPLATE'),
            EMAIL_SERVICE=os.environ.get('EMAIL_SERVICE'),
            )
    return render_template('pledges.html', pledgesresult=pledgesresult)

@app.route("/success-stories")
def success_stories():
    """ Basic route """
    return render_template("success-stories.html")
