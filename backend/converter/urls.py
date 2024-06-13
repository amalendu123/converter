from django.contrib import admin
from django.urls import path

from .views import pdf_to_excel
urlpatterns = [
    path('upload/',pdf_to_excel,name="upload"),
]
