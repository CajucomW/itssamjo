# Generated by Django 3.0.7 on 2020-06-26 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20200626_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogmodel',
            name='title',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
