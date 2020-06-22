from rest_framework import routers
from . import views

router - routers.DefaultRouter()
router.register('api/blog', BlogViewSet, 'blog')

urlpatterns = router.urls

#[
    # this views "class" came from
    # itssamjo/itssamjo/blog/views.py
#     path('api/blog/', views.BlogModelListCreate),
# ]