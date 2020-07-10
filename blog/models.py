from django.db import models
from django.contrib.auth.models import User

# Need to add models for UN and PW

class BlogModel(models.Model):
    title = models.CharField(max_length=100, unique=True)
    text = models.TextField(blank=True)
    # on_delete=models.CASCADE deletes all the user's
    # posts when acct is deleted
    owner = models.ForeignKey(
        User, 
        related_name='blog', 
        on_delete=models.SET_NULL,
        null=True)
    # image = models.FileField(upload_to="blogimages/", null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

# def __str__(self):
#     return self.title + ' said ' + self.text