from flask import Flask, request, render_template
app = Flask(__name__)

people = {2:{'fname':'Lauren', 'lname':'Diederichs','age':30},
		  6:{'fname':'Erica', 'lname':'Diederichs','age':28},
		  11:{'fname':'Pat', 'lname':'Browne','age':31}
		 }

@app.route("/")
def hello():
    return "Hello World from " + "<h1>Lauren!!!</h1>"

@app.route('/admin')
@app.route('/admin/')
@app.route('/admin/<myid>')
@app.route('/admin/<myid>/')
def admin(myid=None):
	print('people:', people)
	print ('my id is:', int(myid))
	return render_template("person.html",
		testval="Some Value So We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))

@app.route('/info')
@app.route('/info/')
def info():
	# print('Args:', request.args)
    print('My variable: ', request.args.get('myvar','mydefault'))
    return "Hello World! - info - Lauren " + request.args.get('parm1','default1')

@app.route('/update')
def update():
    return 'You are in the update route for Lauren'



if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)