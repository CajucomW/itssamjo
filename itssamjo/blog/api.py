from blog.models import BlogModel
from rest_framework import viewsets, permissions
from .serializers import BlogModelSerializer

# BlogModel Viewset
class BlogViewSet(viewsets.ModelViewSet):
    queryset = BlogModel.objects.order_by('-created')
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BlogModelSerializer