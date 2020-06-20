from django.contrib import admin
from django.urls import path, include
from blog import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('reactfrontend.urls')),
    path('', include('blog.urls')),
    # path('api/blog', views.blog_list),
    # path('api/blog/<int:pk>', views.blog_detail)
    # path('blog', include('reactfrontend.urls')),
    # path('write-blog', include('reactfrontend.urls')),
]
