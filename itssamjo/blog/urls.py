from django.urls import path
from . import views

urlpatterns = [
    # this views "class" came from
    # itssamjo/itssamjo/blog/views.py
    path('api/blog/', views.blog_list),
]