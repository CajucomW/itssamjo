from django.db import migrations

#use this so the API isn't empty to begin with
def create_data(apps, schema_editor):
    BlogModel = apps.get_model('blog', 'BlogModel')
    BlogModel(title='First Entry', text='Entered from blog/migrations/0002_blog.py').save()

class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
