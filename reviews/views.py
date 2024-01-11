from rest_framework.generics import CreateAPIView, DestroyAPIView
from .serializers.common import ReviewSerializer
from .models import Review

# Path: /reviews/
# Methods: GET, POST
class ReviewCreateView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

# Path: /reviews/:pk/
# Methods: DELETE
class ReviewDestroyView(DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
