from blog.models import BlogModel
from rest_framework import viewsets, permissions
from .serializers import BlogModelSerializer

# BlogModel Viewset
class BlogViewSet(viewsets.ModelViewSet):
    # remove for authentication:
    # queryset = BlogModel.objects.order_by('-created')
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = BlogModelSerializer

    def get_queryset(self):
        return self.request.user.blog.all()

    def perform_create(self, serializer):
        serializer.save(ownder=self.request.user)
    