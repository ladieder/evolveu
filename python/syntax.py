# define attributes / variables
print("made it to syntax.py")

# number syntax
x = 300
print(x)

y = 300.00
print(y)

z = 3e2
print(z)

# strings
s1 = ""
print(s1)

s2 = "hello"
print(s2)

# booleans
b1 = True
print(b1)

b2 = False
print(b2)

# lists
l1 = ["a",1,"b",2]
print(l1)

l2 = [["a", 1], ["b", 2], "c", 3]
print(l2)
print(l2[0])
print(l2[0][0])

# dictionaries
d1 = {"k1":1, "k2":2, "k3":3}
print(d1)
print(d1["k1"])

d2 = {"k1":[1,"a",2], "k2":{"k2a":3, "k2b":4}}
print(d2)
print(d2["k1"])
print(d2["k1"][0])
print(d2["k2"]["k2a"])

# tuples
t1 = (1,2,"a",2,1)
print(t1)
print(t1[0])

# sets
set1 = {1,2,"a",2,1}
print(set1)
for x in set1:
  print(x)

# undefined
# print(l1[10])

# if / else
if b1:
    print("b1 is True")
else:
    print("b1 is False")

print("b2 is True") if b2 else print("b2 is false")

# functions
def my_function():
  print("Hello from a function")

my_function()

def my_function2(name):
    print(f"Hello {name}")

my_function2("Lauren")

# list methods
print(l1)
l1.append("new")
print(l1)
l1.insert(0,"newnew")
print(l1)
l1.remove(1)
print(l1)
l1.pop()
print(l1)
l1.pop(0)
print(l1)
del l1[1]
print(l1)
l1.clear()
print(l1)
del l1
# print(l1)

# loops
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x) 
    if x == "banana":
        break

fruits = ["apple", "banana", "cherry"]
for x in fruits:
    if x == "banana":
        continue
    print(x)

for x in range(2, 20, 3):
    print(x)
else:
    print("done")

