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
        return redirect(url_for('yourpledges', pledgesresult=','.join(pledgesresult)))
    return render_template('pledges.html', pledgesresult=pledgesresult)

#displays pledges made to user
@app.route('/yourpledges/',methods=["GET", "POST"])
def yourpledges():
    data = request.args.get('pledgesresult').split(',')
    print(data)
    return render_template('yourpledges.html', pledgesresult=data)

@app.route("/environmental-stories")
def environmental_stories():
    """ Basic route """
    return render_template("environmental-stories.html")
