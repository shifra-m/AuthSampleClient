FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

ENV ASPNETCORE_URLS=http://+:80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ToDoListReact-master/ToDoListReact-master.csproj", "ToDoListReact-master/"]
RUN dotnet restore "ToDoListReact-master/ToDoListReact-master.csproj"
COPY . .
WORKDIR "/src/ToDoListReact-master"
RUN dotnet build "ToDoListReact-master.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ToDoListReact-master.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ToDoListReact-master.dll"]
