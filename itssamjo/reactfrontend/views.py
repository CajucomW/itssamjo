from django.shortcuts import render

def index(request):
    # this automatically looks through 'templates/'
    return render(request, 'frontend/index.html')