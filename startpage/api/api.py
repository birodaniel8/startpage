from api.models import City
from rest_framework import viewsets, permissions
from .serializers import CitySerializer

# City Viewset
class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CitySerializer