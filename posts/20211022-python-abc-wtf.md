---
title: "Python ABC WTF"
date: 2021-10-22
tags:
  - python
  - OOP
  - inheritence
layout: layouts/post.njk
---

I was playing with some python code recently, and something... kind of caught me offguard. (Well, more like I misunderstood how the API works). Consider the following:

```python
from abc import ABC
class MyAbCls(ABC): pass
class MyRealCls(MyAbCls): pass
class AnotherMyRealCls(MyRealCls): pass

my_real_in=MyRealCls()
another_real_in=AnotherMyRealCls()
```

When confronted with `issubclass`, my immediate expectation on how it should work is:

```python
# RETURNS FALSE!
assert issubclass(my_real_in, MyAbCls)
```

Then it hit me. `issubclass` expects classes as arguments. I should have been using `isinstance` instead. e.g.:

```python
assert isinstance(my_real_in, MyAbCls)
assert isinstance(another_real_in, MyRealCls)
assert isinstance(another_real_in, MyAbCls)

assert issubclass(type(my_real_in), MyAbCls)
```
