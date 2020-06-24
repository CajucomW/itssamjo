from django.urls import path
from . import views

urlpatterns = [
    # this 'views' method was created in reactfrontend/views
    path('', views.index)
]