from django.shortcuts import render
from django import forms
from django.contrib import messages
from django.contrib.auth.models import UnicodeUsernameValidator
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, generics
from .models import BlogModel
from .serializers import *

## Going to try authentication using Django
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate, login

# user = authenticate(username='itssamjo', password='itssamjo')

## Straight from django documentation:
# def login(request):
#     username = request.POST['username']
#     password = request.POST['password']
#     user = authenticate(request,
#         username=username,
#         password=password)
    
#     if user is not None:
#         login(request, user)
#         ## Redirect to success page
    
#     else:
#         ## Redirect to 'invalid' message

# # -------------------WORKING CODE-----------------------#
# @api_view(['GET', 'POST'])
# def blog_list(request):
#     # if request.method == 'GET':
#     data = BlogModel.objects.order_by('-created')
#     serializer = BlogModelSerializer(
#         data, 
#         context={'request': request}, 
#         many=True)
#     return Response(serializer.data)

    # elif request.method == 'POST':
    #     serializer = BlogModelSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors,
    #         status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT', 'DELETE'])
# def blog_detail(request, pk):
#     try:
#         blog = BlogModel.objects.get(pk=pk)
#     except BlogModel.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'PUT':
#         serializer = BlogModelSerializer(
#             blog,
#             data=request.data,
#             context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)
#         return Response(serializer.errors,
#             status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         blog.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#-------------------------------------------------------------------

# This is what is see on 'api/blog/
class BlogModel(generics.ListCreateAPIView):
    queryset = BlogModel.objects.order_by('-created')
    serializer_class = BlogModelSerializer