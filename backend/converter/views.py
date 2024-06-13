from django.http import JsonResponse

from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import UploadFileForm


def pdf_to_excel(request):
    if request.method == "POST":
        form = UploadFileForm(request.POST, request.FILES)
        if form.is_valid():
            # file is saved
            form.save()
            return HttpResponseRedirect("/success/url/")
    else:
        form = UploadFileForm()
    return render(request, "upload.html", {"form": form})