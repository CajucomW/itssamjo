from django.apps import AppConfig


class BlogConfig(AppConfig):
    name = 'blog'
    # 06232020 gunicorn mod
    server = 'itssamjo.server'
