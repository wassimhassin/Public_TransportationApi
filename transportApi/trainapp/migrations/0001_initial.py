# Generated by Django 4.1.3 on 2023-08-17 01:26

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Train',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('depart', models.CharField(max_length=100)),
                ('destination', models.CharField(max_length=100)),
                ('ticketTarif', models.CharField(max_length=100, null=True)),
                ('stations', models.JSONField()),
                ('working_hours', models.JSONField()),
            ],
        ),
        migrations.CreateModel(
            name='CommentTrain',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('train', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='trainapp.train')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
