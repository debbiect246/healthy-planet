""" Routes """

from flask import render_template, request, url_for, redirect

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


@app.route("/pledges", methods=["GET","POST"])
def pledges():
    """pledges logic"""
    pledgesresult=[]
    if request.method == "POST":
        pledgesresult = request.form.getlist('pledges')
        return redirect(url_for('your_pledges', pledgesresult=','.join(pledgesresult)))
    return render_template('pledges.html', pledgesresult=pledgesresult)

#displays pledges made to user
@app.route('/your-pledges/',methods=["GET", "POST"])
def your_pledges():
    data = request.args.get('pledgesresult').split(',')
    return render_template('your-pledges.html', pledgesresult=data)

@app.route("/success-stories")
def success_stories():
    """ Basic route """
    return render_template("success-stories.html")
