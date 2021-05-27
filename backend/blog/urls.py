from django.urls import path
from .views import get_blogs
urlpatterns = [
    path('blogs/', get_blogs,name="blogs_list"),
]