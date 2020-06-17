from django.urls import path
from . import views

urlpatterns = [
    path('api/blog/', views.BlogModel.as_view() ),
]