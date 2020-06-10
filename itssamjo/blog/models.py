from django.db import models

class BlogModel(models.Model):
    title = models.CharField("Title", max_length=240)
    text = models.TextField()
    created = models.DateTimeField(auto_now_add=True)

def __str__(self):
    return self.title | self.created | self.text