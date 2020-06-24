"""
WSGI config for itssamjo project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# 06232020 Attemtp to deploy to heroku
from whitenoise.django import DjangoWhiteNoise

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'itssamjo.settings')

# 06232020 Attemtp to deploy to heroku
application = get_wsgi_application()
application = DjangoWhiteNoise(application)
