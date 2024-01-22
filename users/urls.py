from django.urls import path
from .views import RegisterView, UserDetailView
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('<int:pk>/', UserDetailView.as_view())
]