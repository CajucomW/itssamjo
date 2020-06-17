# Following the guide online, here's another
# urls.py! I'm confused ATM


from django.urls import path
from . import views

print('======== this message is from itssamjo/frontend_react/===============')
print('===== "views" from this urls.py is from itssamjo/frontend_react/=====')

urlpatterns = [
    path('',views.index),
]