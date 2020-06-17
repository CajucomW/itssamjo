from django.contrib import admin
from django.urls import path, include
from blog import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/bloglist', views.blog_list),
    # path('api/blog/<int:pk>', views.blog_detail),

    # the URLs below lead to the project Apps
    path('', include('blog.urls')),
    path('', include('frontend_react.urls')),
]
