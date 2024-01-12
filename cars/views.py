from rest_framework.generics import RetrieveUpdateDestroyAPIView
from lib.views import OwnerListCreateView
from .models import Car
from .serializers.common import CarSerializer
from .serializers.populated import PopulatedCarSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.permission import IsOwnerOrReadOnly
# Path: /cars/
# Methods: GET, POST
class CarListCreateView(OwnerListCreateView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
# Path: /cars/:id/
# Methods: GET, PUT, PATCH, DELETE
class CarDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    permission_classes = [IsOwnerOrReadOnly]
    def get_serializer_class(self):
        print('self request method ->', self.request.method)
        if self.request.method == 'PUT':
            return CarSerializer
        return PopulatedCarSerializer