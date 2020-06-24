from rest_framework import routers
from .api import BlogViewSet
from . import views

router = routers.DefaultRouter()
router.register('api/blog', BlogViewSet, 'blog')

urlpatterns = router.urls