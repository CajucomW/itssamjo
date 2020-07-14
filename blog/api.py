from blog.models import BlogModel
from rest_framework import viewsets, permissions
from .serializers import BlogModelSerializer

# BlogModel Viewset

class BlogViewSet(viewsets.ModelViewSet):
#   remove for authentication:
#   queryset = BlogModel.objects.order_by('-created')
#   the following code removes ability to see blogs
#   unless authenticated
    
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = BlogModelSerializer

#   This returns blogs to the authenticated user
    def get_queryset(self):
        return self.request.user.blog.order_by('-created')

#   This allows new users to be saved
#   I may have to take this out since I only want One User for now
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    

# Edit so the only restriction when logged out is Creating blogs
# When logged out, I need to be able to see all blog posts.