# Generated by Django 3.0.7 on 2020-06-26 13:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0004_auto_20200625_0149'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogmodel',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='blog', to=settings.AUTH_USER_MODEL),
        ),
    ]
