from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/invoices')
def invoices():
    return render_template('invoices.html')

@app.route('/invoice_details')
def invoice_details():
    return render_template('invoice_details.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/customers')
def customers():
    return render_template('customers.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/thank_you')
def thank_you():
    first = request.args.get('first')
    last = request.args.get('last')    
    return render_template('thank_you.html', first=first, last=last)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)