from django.db import models

# Need to add models for UN and PW

class BlogModel(models.Model):
    title = models.CharField("Title", max_length=240)
    text = models.TextField()
    # image = models.FileField(upload_to="blogimages/", null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

# def __str__(self):
#     return self.title + ' said ' + self.text